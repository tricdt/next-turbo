/* plop-templates/component/prompt.js*/

module.exports = {
   description: 'generate react component',
   prompts: [
      {
         type: 'input',
         name: 'name',
         message: 'controller name please',
      },
   ],
   actions: [
      {
         type: 'add',
         path: 'src/{{name}}.js',
         templateFile: 'plop-templates/controller.hbs',
      },
   ],
};
