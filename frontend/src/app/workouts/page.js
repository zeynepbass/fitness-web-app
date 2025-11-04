import Home from "../screens/Home";
import { get } from "../services/postService";

export default async function WorkoutsPage() {
  const posts = await get(); 
const res=posts.reverse()
  return (
    <div className="w-full overflow-hidden">

      <Home posts={res} /> 
    </div>
  );
}
