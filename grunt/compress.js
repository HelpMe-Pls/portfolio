module.exports = {
    dist: {
        options: {
            archive: './dist/khoile99.tar.gz',
            mode: 'tgz'
        },
        files: [
            {
                expand: true,
                cwd: 'dist',
                src: ['**/*'],
                dest: '.'
            }
        ]
    }
};
