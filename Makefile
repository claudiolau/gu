
default: help

.PHONY: help
help: # Show help for each of the Makefile recipes.
	@grep -E '^[a-zA-Z0-9 -]+:.*#'  Makefile | sort | while read -r l; do printf "\033[1;32m$$(echo $$l | cut -f 1 -d':')\033[00m:$$(echo $$l | cut -f 2- -d'#')\n"; done

.PHONY: setup
setup: # Setup tools required for local development.
	pnpm i 

### server ### 
.PHONY: pgen 
generate: 
	pnpx prisma generate 

.PHONY: ppush 
ppush: #  Does not interact with or rely on migrations. The migrations table will not be updated, and no migration files will be generated.
	pnpx prisma db push 


### data management ### 
.PHONY:pstudio 
pstudio: 
	pnpx prisma studio

.PHONY:pseed 
pseed: 
	npx prisma db seed