function Home() {
  const text = {
    heading: "New portfolio",
    subheading: "Home Page",
    intro:
      "hi",
    cleanup: "this is a template",
  };

  return (
    <>
      <h1 className="heading">{text.heading}</h1>
      <h2>{text.subheading}</h2>
      <p>{text.intro}</p>
      <p>{text.cleanup}</p>
      {/* Example of using a js property to inject dyanmic html */}
      <div dangerouslySetInnerHTML={{ __html: text.html }} />
      <div className="card">
        
      </div>
    </>
  );
}

export default Home;
