/* emilien <emilien@emilien-lx>, 2021 */

function defaultTemplate(
	{ template },
	opts,
	{ imports, interfaces, componentName, props, jsx, exports },
) {
	const plugins = ['jsx'];
	if (opts.typescript) {
		plugins.push('typescript');
	}
	const typeScriptTpl = template.smart({ plugins });
	return typeScriptTpl.ast`${imports}
${interfaces}
function ${componentName}(${props}) {
  return ${jsx};
}
${exports}
  `;
}
module.exports = defaultTemplate;
