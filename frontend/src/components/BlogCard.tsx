import { Link } from "react-router-dom";

interface BlogcardProps {
    authorname: string,
    title: string,
    content: string,
    publishdate: string;
    id: number
}


export const BlogCard = ({
    id,
    authorname,
    title,
    content,
    publishdate
}: BlogcardProps)=>{

    return <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col pt-1">
                <Avatar name = {authorname} />
            </div>
            <div className="font-medium mt-1 ml-2">{authorname}</div>
            <div className="pt-4 pl-2">
                <Dot />
            </div>
            {/* <div className="text-xs pl-2 pt-3 text-neutral-400">
                &#9642;
            </div> */}
            <div className="font-extralight ml-2 mt-1 text-slate-400">{publishdate}</div>
        </div>
        <div className="text-2xl font-semibold pt-3">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100) + "....."}
        </div>
        <div className="font-thin text-slate-500 text-sm pt-4">
            {`${Math.ceil(content.length / 100)} min read`}
        </div>
        
    </div>
    </Link>
}


export function Dot(){
    return <div className=" h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({name,size = "small"}: {name: string , size?: "small" | "big"}){
    const getInitials = (name: string) => {
        const [firstName, lastName] = name.split(' ');
        const firstInitial = firstName ? firstName.charAt(0) : '';
        const lastInitial = lastName ? lastName.charAt(0) : '';
        return `${firstInitial}${lastInitial}`;
    };
    
    const initials = getInitials(name);
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"}  font-lignt text-gray-600 dark:text-gray-300`}>{initials}</span>
    </div>
    
}
