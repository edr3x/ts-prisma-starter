startdb:
	docker-compose -f docker-compose.db.yaml up -d
	
stopdb:
	docker-compose -f docker-compose.db.yaml down
