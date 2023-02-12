# Endpoints

>Note:\
>This is just example endpoints

## Create

- `POST` : `/api/v1/book`

### Body

```json
{
    "title": "Hello There",
    "author": "Obi Wan Kenobi",
    "isFiction": true,
    "price": 420
}
```

## Get all

- `GET` : `/api/v1/book`

## Get one

- `GET` : `/api/v1/book/:id`

## Update

- `PATCH` : `/api/v1/book/:id`

### Body

```json
# same body as create but only provide the key value pair which needs to be updated
```

## Delete

- `DELETE` : `/api/v1/book/:id`
