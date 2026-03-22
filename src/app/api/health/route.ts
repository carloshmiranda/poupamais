import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

// Only initialize database connection if DATABASE_URL is available
const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;

export async function GET() {
  try {
    const timestamp = new Date().toISOString();
    const uptime = process.uptime();

    // If no database URL is configured, return basic health status
    if (!sql || !process.env.DATABASE_URL) {
      return NextResponse.json({
        ok: true,
        data: {
          status: 'healthy',
          timestamp,
          uptime,
          database: {
            connected: false,
            note: 'Database not configured'
          }
        }
      });
    }

    // Test database connection
    const start = Date.now();
    await sql`SELECT 1 as health_check`;
    const dbLatency = Date.now() - start;

    return NextResponse.json({
      ok: true,
      data: {
        status: 'healthy',
        timestamp,
        uptime,
        database: {
          connected: true,
          latency: `${dbLatency}ms`
        }
      }
    });
  } catch (error) {
    console.error('Health check failed:', error);

    return NextResponse.json({
      ok: false,
      error: 'Database connection failed',
      data: {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: {
          connected: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      }
    }, { status: 503 });
  }
}