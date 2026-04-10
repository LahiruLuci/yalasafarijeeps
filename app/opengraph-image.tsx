import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Yala Safari Jeeps | Premium Wilderness Experience';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1914',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Subtle Background Texture Decor */}
        <div 
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'rgba(208, 122, 63, 0.05)',
            borderRadius: '50%',
            filter: 'blur(100px)',
          }} 
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '300px',
            height: '300px',
            background: 'rgba(107, 111, 58, 0.05)',
            borderRadius: '50%',
            filter: 'blur(80px)',
          }} 
        />

        {/* Content Frame */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid rgba(242, 230, 206, 0.1)',
            padding: '60px 100px',
            borderRadius: '40px',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          {/* Branded Label */}
          <div 
            style={{ 
              fontSize: '14px', 
              fontWeight: 900, 
              color: '#D07A3F', 
              letterSpacing: '0.5em', 
              textTransform: 'uppercase',
              marginBottom: '30px'
            }}
          >
            Mastering the Wild Since 2008
          </div>

          {/* Main Headline */}
          <div 
            style={{ 
              fontSize: '84px', 
              fontWeight: 900, 
              color: '#F2E6CE', 
              letterSpacing: '-0.04em',
              textAlign: 'center',
              lineHeight: 1,
              marginBottom: '20px',
              fontStyle: 'italic',
            }}
          >
            YALA SAFARI JEEPS
          </div>

          <div 
            style={{ 
              fontSize: '24px', 
              fontWeight: 500, 
              color: 'rgba(242, 230, 206, 0.4)', 
              textAlign: 'center',
              letterSpacing: '0.1em'
            }}
          >
            Premium Wildlife Expeditions | Sri Lanka
          </div>
        </div>

        {/* Brand Accent */}
        <div 
          style={{
            position: 'absolute',
            bottom: '60px',
            height: '2px',
            width: '200px',
            background: 'linear-gradient(90deg, transparent, #D07A3F, transparent)'
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
