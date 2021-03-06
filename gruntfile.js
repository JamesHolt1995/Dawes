module.exports = function(grunt) {

grunt.initConfig({
  sass: {
    dist: {
   	  options: {                       // Target options
        style: 'compressed'
      },
      files: {
        'dist/css/main.css': 'src/css/main.scss'
      }
    }
  },
  jshint: {
  	all: ['Gruntfile.js', 'src/*.js']
  },
  copy: {
  	main: {
  		cwd: 'src',
  		expand: true,
  		src: '*.html',
  		dest: 'dist/',
  	},
  	js: {
  		cwd: 'src/js',
  		expand: true,
  		src: '*.js',
  		dest: 'dist/js'
  	},
  	img: {
  		cwd: 'src/img',
  		expand: true,
  		src: '*.**',
  		dest: 'dist/img'
  	}
  },
  autoprefixer: {
    options: {
      browsers: ['last 5 versions']
    },
    dist:{
      files:{
        'dist/css/main.css':'dist/css/main.css'
      }
    }
  },
  watch: { 
  scripts: {
    files: ['**/*.js', '**/*.html', '**/*.scss'],
    tasks: ['default'],
  }
}
});


grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');

grunt.registerTask('default',[
	'jshint','copy:main','copy:js', 'copy:img','sass', 'autoprefixer', 'watch'
]);

};