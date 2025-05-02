const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  await delay(5000);
  return <p>hello</p>;
};

export default HomePage;
