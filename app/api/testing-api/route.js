export async function POST(req) {
    let body = await req.json()
    console.log(body);

    return Response.json("your Post request has been received")
}


export async function GET(req) {
    let body = req.nextUrl.searchParams
    console.log(body);

    return Response.json("your get request has been received")
}

