from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust the origin to your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
# async def create_item(item: Item):
async def read_item():
    return {
    "name": "Foo",
    "description": "An optional description",
    "price": 45.2,
    "tax": 3.5
}