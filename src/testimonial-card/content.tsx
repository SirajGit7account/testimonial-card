import profilehumbnail from '../public/profile-thumbnail.png';

interface contentProps { 
    image: typeof profilehumbnail;
    name: string;
    username: string;
    text: string;
}

export function Content({ image, name, username, text }: contentProps) {
    return (
        <div className="flex flex-col">
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
        </div>
    );
}