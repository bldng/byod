import { InlineWidget } from "react-calendly";
import useFitText from "use-fit-text";

function App() {
  const { fontSize, ref } = useFitText({
    maxFontSize: 1000,
  });
  return (
    <main>
      <h1
        className="title"
        ref={ref}
        style={{
          fontSize,
          height: "auto",
          width: "100%",
          whiteSpace: "nowrap",
        }}
      >
        BYOD!
      </h1>
      <section className="calendar">
        <InlineWidget
          //url="https://calendly.com/gerhard-bliedung/byod-24?hide_gdpr_banner=1"
          url="https://calendly.com/baketothefuture/bring-your-own-dough-porta-il-tuo-impasto?month=2024-11?hide_gdpr_banner=1"
          pageSettings={{
            backgroundColor: "fff7d1",
            hideEventTypeDetails: false,
            hideLandingPageDetails: true,
            primaryColor: "563A9C",
            textColor: "8b5dff",
          }}
          styles={{
            height: "1100px",
            padding: "0",
            margin: "0",
          }}
        />
      </section>
    </main>
  );
}

export default App;
