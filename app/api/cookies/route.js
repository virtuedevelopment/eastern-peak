"use server";
import { cookies } from "next/headers";

export async function GET(request) {
    const profile = cookies().get("profile");
    const isAuthenticated = cookies().get("isAuthenticated");

    return new Response(
        JSON.stringify({
            profile: profile?.value || null,
            isAuthenticated: isAuthenticated?.value || false, // Default to false if not set
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}

export async function POST(request) {
    try {
        const { profile, isAuthenticated } = await request.json();

        // Set the profile cookie with httpOnly and secure options
        if (profile !== undefined) {
            cookies().set("profile", profile, {
                path: "/",
                httpOnly: true,
                secure: true, // This should be true in production with HTTPS
                maxAge: 43200 // 12 hours
            });
        }

        // Set the isAuthenticated cookie without httpOnly and secure options
        if (isAuthenticated !== undefined) {
            cookies().set("isAuthenticated", String(isAuthenticated), {
                path: "/",
                maxAge: 43200 // 12 hours
            });
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error setting cookies:", error);

        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
