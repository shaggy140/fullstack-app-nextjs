import GradientLayout from "../components/gradientLayout";

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="blue"
      subtitle="profile"
      title="Pradeep Kaswan"
      description="15 public playlist"
      image="https://imgix.ranker.com/user_node_img/50087/1001738942/original/human-relationships-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375"
    >
      <div>home page</div>
    </GradientLayout>
  );
};

export default Home;
