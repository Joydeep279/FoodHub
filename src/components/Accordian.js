const Section = ({ title, desc, view, setView }) => {
  return (
    <div>
      <h1 className="font-bold text-2xl">{title}</h1>

      {view ? (
        <>
          <button
            onClick={() => {
              setView(false);
            }}>
            Hide
          </button>
          <div>
            <span className="font-medium">{desc}</span>
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            setView(title);
          }}>
          Show
        </button>
      )}
    </div>
  );
};
export default Section;
