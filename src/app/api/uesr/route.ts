import connect from '@/lib/db';
import User from '@/lib/models/user';
import { message } from 'antd';
import { ObjectId } from 'mongodb';
import { Types } from 'mongoose';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify({
            message: 'Users fetched successfully',
            data: users
        }), { status: 200 });
    } catch (error: any) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        await connect();
        const user = new User(body);
        await user.save();

        return new NextResponse(JSON.stringify({
            message: 'User created successfully',
            data: user
        }), { status: 200 });
    } catch (error: any) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 });
    }
}

export const PUT = async (req: any) => {
    try {
        const body = await req.json();
        await connect();
        const { id } = body;
        if (!id) {
            return new NextResponse(JSON.stringify({ message: "ID is required" }), { status: 400 });
        }
        if (!Types.ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ message: "Invalid user id" }), { status: 400 });
        }
        const updateUser = await User.findByIdAndUpdate(
            { _id: new ObjectId(id) },
            body,
            { new: true }
        );

        if (!updateUser) {
            return new NextResponse(JSON.stringify({ message: "User not found" }), { status: 400 });
        }

        return new NextResponse(JSON.stringify({
            message: 'User updated successfully',
            data: updateUser
        }), { status: 200 });
    } catch (error: any) {
        console.error(error);
        return new NextResponse(JSON.stringify({ message: error.message }), { status: 500 });
    }
}