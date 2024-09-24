IMAGE_NAME=server

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run -p 8080:8080 $(IMAGE_NAME)

migrate:
	npx prisma migrate dev --name $(name)

db-pull:
	npx prisma db pull

build:
	docker build -t vn_history_bot_server .

release:
	docker build --build-arg APP_VERSION=$(version) -t vn_history_bot_server -f Dockerfile .
	docker tag vn_history_bot_server vnhistorybot.azurecr.io/vnhistorybot:$(version)
	docker push vnhistorybot.azurecr.io/vnhistorybot:$(version)

.PHONY: build run migrate release