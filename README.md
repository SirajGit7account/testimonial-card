This project is a beginner's project to understand and learn CSS and HTML skills.

The project started by installing these packages separately:
1/ Tan Stack React Router/ Router Plugin to work with Vite
2/ Vite for bundling
3/ Tailwind CSS for styling 
4/ Typescript
5/ React and React DOM

In Tan Stack you basically at the root of your project create a routes folder where you write all file routes in the same place, which makes it easier to understand the file and folder structure in the codebase. This can be done with the @index.tsx file in the routes folder, that links to all the feature-specific folders and routes in the src folder.

After this in the src folder the profile image was imported into a new folder called public.

A new folder called Testimonial card was created in the src folder which was further divided into two files. 
One was the background of the Testimonial card called @foundation.tsx
The other one was @content.tsx which contained: name, username, the profile image, and the testimonial itself.

Both these files then got imported into the @index.tsx file in the routes folder.

In both the content and the Index file, the profile image, the name, and the user name were kept together in one div and the testimonial was kept in another. This was due to different styling issues for both of them: 

The index file: 
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

The content file: 
{/* User info section - image, name, username */}
            <div className="flex flex-row items-center gap-3 mb-4">
                <img src={image} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                    <p className="text-lg text-left text-black font-['Noto Sans']">{name}</p>
                    <p className="text-sm text-left text-black/70 font-['Noto Sans']">{username}</p>
                </div>
            </div>
            {/* Testimonial text section */}
            <div>
                <p className="text-sm text-left text-black/70 font-['Noto Sans']">{text}</p>
            </div>
------

Apart from the use of div another main learning highlight was the dynamic style structure that was ultimately set in the index file but started in the individual feature files. Such as this simple setting of height and width of the foundational background of the testimonial card: 

style={{ height: `${height}px`, width: `${width}px` }} 

Overall this was a fun use of Divs, dynamic style tags, and of course Tailwind CSS and Tan Stack routing among other things.

