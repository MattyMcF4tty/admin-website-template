import { fetchVehicleType, patchVehicleType } from "@/src/utils/database/fleetVehicleType";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id');


    if (!id) {
        return new NextResponse(JSON.stringify({ message: 'Missing id from searchParams' }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            },
        });    
    }
    
    try {
        const type = await fetchVehicleType(Number(id));

        return new NextResponse(JSON.stringify({ message: 'Request completed successfully', type: type }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
        });    
    } catch (error:any) {
        console.error(error.name, error.message)
        return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
        });  
    }
}


export async function PATCH(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id');

    if (!id) {
        return new NextResponse(JSON.stringify({ message: 'Missing id from searchParams' }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            },
        });    
    }

    try {
        const body = await request.json();
        const { fuelType, range, brand, model, description, createdAt } = body;

        await patchVehicleType({
            id: id,
            fuelType: fuelType,
            range: Number(range),
            brand: brand,
            model: model,
            description: description,
            createdAt: createdAt
        })


        return new NextResponse(JSON.stringify({ message: `successfully updated vehicleType id: ${id}` }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: 'Error parsing request body' }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            },
        });
    }
}