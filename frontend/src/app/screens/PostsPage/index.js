"use client";
import Card from "../../components/Cards"
import Post from "../../components/PostModal"
const Index = ({ open, setOpen,posts,email }) => {



  return (
    <div className="relative min-h-screen p-4">
     <Post open={open} setOpen={setOpen}/>
     <Card posts={posts} email={email}/>
    </div>
  );
};

export default Index;
