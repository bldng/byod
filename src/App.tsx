import { InlineWidget } from "react-calendly";

function App() {
  return (
    <main>
      <h1 className="title">BYOD!</h1>
      <section className="calendar">
        <InlineWidget
          url="https://calendly.com/gerhard-bliedung/byod-24?hide_gdpr_banner=1"
          pageSettings={{
            backgroundColor: "fff7d1",
            hideEventTypeDetails: false,
            hideLandingPageDetails: true,
            primaryColor: "563A9C",
            textColor: "8b5dff",
          }}
          styles={{
            height: "1000px",
            padding: "0",
            margin: "0",
          }}
        />
      </section>
    </main>
  );
}

export default App;
