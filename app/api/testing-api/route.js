export async function POST(req) {
    let body = req.json()
    console.log(body);

    return Response.json("your request has been received")
}