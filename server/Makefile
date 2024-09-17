IMAGE_NAME=server

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -p 8080:8080 $(IMAGE_NAME)

migrate:
	npx prisma migrate dev --name $(name)

db-pull:
	npx prisma db pull

.PHONY: build run migrate