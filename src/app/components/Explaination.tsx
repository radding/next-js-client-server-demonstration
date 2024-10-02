export const Explaination = (props: { inClientExample: boolean }) => {
  return (
    <section>
      <h2> This is an example</h2>
      {props.inClientExample ? (
        <p>
          Since this is in the client example, all of this JS is bundled into
          the client. This is because NextJS can&apos;t determine for sure that
          this element doesn&apos;t need to be a server application
        </p>
      ) : (
        <p>
          Since this is in the server example, only the HTML and RSC is
          forwarded to the server. All of this JS is omitted from the client
          application
        </p>
      )}
    </section>
  );
};
