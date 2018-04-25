#Items API

## Introduction

> This application is an Express API for a items service that has create, update and delete items functionality. This API is a REST API and the return format for all endpoints is JSON.

## Endpoints

1. `POST /api/v1/items`
2. `GET /api/v1/items`: returns all the items, supports pagination and limit e.g ?page=1&limit=1
3. `GET /api/v1/items/:id`: returns a single item
4. `PUT /api/v1/items/:id`: updates a single item
5. `GET /categorize`: returns all items in a category, supports pagination and limit e.g ?page=1&limit=1&category=elec
6. `DELETE /items/:id`: deletes a single item

