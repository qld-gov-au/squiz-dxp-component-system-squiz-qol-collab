
import { xssSafeContent } from '../../02_utils/xss';
import BlockQuote from './main.js';

const mockData = {
	"citeUrl": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#attributes",
	"citeText": "Sir Tim Berners-Lee",
	"content": "The goal of the Web is to serve humanity. We build it now so that those who come to it later will be able to create things we cannot ourselves imagine.",
	"classes": "test-class"
}

describe('BlockQuote', () => {
    /* General */
    it('should return valid HTML structure', async () => {
      const result = await BlockQuote.main(mockData);
  
      expect(result).toBeDefined();
      // Will check generate correct ID in the next function
      expect(result).toMatch(/<figure class="blockquote test-class"> /);
    });


      /* XSS */
    it('should escape XSS in content', async () => {
        const blockQuoteWithScripts = {        
        content: '<script>alert("xss")</script>'        
        };
        const result = await BlockQuote.main(blockQuoteWithScripts);

        expect(result).toContain(xssSafeContent('<script>alert("xss")</script>'));
        expect(result).not.toContain('<script>alert("xss")</script>');
    });

});