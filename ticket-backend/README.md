# POSTMAN Queries to check :

## Ticket : GET
    localhost:8080/tickets/2

## Ticket : POST
    localhost:8080/tickets

    Use JSON Format :---

        {
            "detail": "Customer complaint of error",
            "resolution": "",
            "open": true,
            "openedby": "Jason",
            "closedby": ""
        }


## Ticket : PUT

    localhost:8080/tickets/55

        {
        "resolution": "restart initiated",
        "closedby": "Miru"
        }

## Ticket : DELETE
     localhost:8080/tickets/6


==========================================================================================

## Bookmark : GET
    localhost:8080/bookmarks/

## Bookmark : DELETE
    localhost:8080/bookmarks/8    