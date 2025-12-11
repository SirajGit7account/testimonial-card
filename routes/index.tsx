import { createFileRoute } from '@tanstack/react-router'
import { Foundation } from '../src/testimonial-card/foundation'
import { Content } from '../src/testimonial-card/content';
import profilehumbnail from '../src/public/profile-thumbnail.png';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="relative min-h-screen">
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Foundation height={200} width={300} />
      </div>
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'left',
          width: '280px',
          paddingLeft: '10px',
        }}
      >
        <Content image={profilehumbnail} name="Sarah Dole" username="@sarahdole" 
        text="I've been searching for high-quality abstract images for my design projects and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!" />
      </div>
    </div>
  );
}
