function EnvironmentPage() {
  return (
    <>
      <h1>{`testKey: ${process.env.testKey}`}</h1>
      <h1>{`Env: ${process.env.NODE_ENV}`}</h1>
    </>
  );
}

export default EnvironmentPage;