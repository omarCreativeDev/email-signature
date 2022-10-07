function App() {
  const font = { fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif' };
  const mainColor = { color: '#fff' };
  const largeFont = { fontSize: 24 };
  const smallFont = { fontSize: 14 };
  const heading = {
    ...font,
    ...largeFont,
    fontWeight: 'bold'
  };
  const subHeading = {
    ...heading,
    ...mainColor,
    ...smallFont
  };
  const hyperlink = {
    ...font,
    ...mainColor,
    ...smallFont,
    textDecoration: 'none !important'
  };

  return (
    <table cellPadding="0" cellSpacing="0" width="100%" bgcolor="#fff">
      <tr>
        <td height="15"></td>
      </tr>
      <tr>
        <td>
          <table cellPadding="0" cellSpacing="0" width="100%" bgcolor="#303030">
            <tr>
              <td height="15" colSpan={3}></td>
            </tr>
            <tr>
              <td width="15"></td>
              <td style={heading}>
                <span style={{ color: '#b5d443' }}>Omar Mirza</span>
              </td>
              <td width="15"></td>
            </tr>
            <tr>
              <td height="5" colSpan={3}></td>
            </tr>
            <tr>
              <td width="15"></td>
              <td style={subHeading}>Senior Front End Developer | Contract</td>
              <td width="15"></td>
            </tr>
            <tr>
              <td height="25" colSpan={3}></td>
            </tr>
            <tr>
              <td width="15"></td>
              <td style={hyperlink}>
                <a style={hyperlink} href="tel:07932 566 488">
                  07932 566 488
                </a>
                &nbsp;&nbsp;
                <a
                  style={hyperlink}
                  href="https://www.linkedin.com/in/omarcreativedev"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </td>
              <td width="15"></td>
            </tr>
            <tr>
              <td height="15" colSpan={3}></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
}

export default App;
