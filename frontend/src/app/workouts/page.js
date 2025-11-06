import Home from "../screens/Home";
import { get } from "../services/postService";

export default async function WorkoutsPage() {
  const posts = await get(); 
const res=posts.reverse()
  return (
    <div className="w-full overflow-hidden p-4">

      <Home posts={res} /> 
    </div>
  );
}
