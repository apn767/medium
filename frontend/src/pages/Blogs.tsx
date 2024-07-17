import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs();
    if(loading){
        return <div className="flex justify-center">
            <div>
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div> 
    }

    return <div>
    <Appbar />
    <div className="flex justify-center">
        <div>
            {blogs.map(blog => <BlogCard  
                id={blog.id}
                authorname={blog.author.name || "Alok Pandey"}
                title={blog.title}
                content={blog.content}
                 publishdate={"15th july 2024"}
            />)}
            
            {/* <BlogCard  
                authorname={"Alok Pandey"}
                title = {"Unlocking the Power of JavaScript: Extracting Initials from Names Efficiently"}
                content = {"JavaScript, a versatile and powerful programming language, is often the go-to tool for web developers. Among its myriad of applications, one common task is manipulating strings to extract specific information. A frequent requirement is to extract the initials from a full name. Whether you're creating user avatars, abbreviating names for display purposes, or simply processing data, extracting initials can be a handy tool in your JavaScript arsenal.String manipulation in JavaScript is a fundamental skill. The language provides a rich set of methods to handle strings, including split(), charAt(), and filter(). These methods allow developers to break down strings into manageable parts and extract necessary characters efficiently."}
                publishdate={"15th july 2024"}
            />
            <BlogCard  
                authorname={"Alok Pandey"}
                title = {"Unlocking the Power of JavaScript: Extracting Initials from Names Efficiently"}
                content = {"JavaScript, a versatile and powerful programming language, is often the go-to tool for web developers. Among its myriad of applications, one common task is manipulating strings to extract specific information. A frequent requirement is to extract the initials from a full name. Whether you're creating user avatars, abbreviating names for display purposes, or simply processing data, extracting initials can be a handy tool in your JavaScript arsenal.String manipulation in JavaScript is a fundamental skill. The language provides a rich set of methods to handle strings, including split(), charAt(), and filter(). These methods allow developers to break down strings into manageable parts and extract necessary characters efficiently."}
                publishdate={"15th july 2024"}
            /> */}
        </div>
    </div>
</div>
}