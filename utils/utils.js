import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

export const parsedHtml = html => {
  const sanitizedHTML = DOMPurify.sanitize(html);
  const parsedHTML = parse(sanitizedHTML);
  return parsedHTML;
};
