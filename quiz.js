copy(`# [${$('.css-1ponsav').textContent} (${$('[diff]').textContent})](${location.href})\n\n${$('.content__eAC7').children[0].innerHTML}\n\n**Companies**:  \n${$$('.company-tag-wrapper__3Qc3').map(x => `[${$('.btn-content__lOBM', x).textContent}](${$('a', x).href})`).join(', ')}\n\n${ $$('.topic-tag__Hn49').length ?`**Related Topics**:  \n${$$('.topic-tag__Hn49').map(x => `[${x.textContent}](${x.href})`).join(', ')}\n\n` : '' }${ $$('.question__3owm').length ? `**Similar Questions**:\n${$$('.question__3owm').map(x => { let link = $('.title__3BnH', x); return `* [${link.textContent} (${$('.difficulty__2LSw',x).textContent})](${link.href})` }).join('\n')}\n\n` : '' }## Solution 1.\n\n\`\`\`cpp\n\n\`\`\``)