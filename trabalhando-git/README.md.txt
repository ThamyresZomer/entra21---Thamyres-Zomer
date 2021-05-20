Copyright (C) Microsoft Corporation. Todos os direitos reservados.

Experimente a nova plataforma cruzada PowerShell https://aka.ms/pscore6


git: 'confirm' is not a git command. See 'git --help'.

The most similar command is
        config
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git config --global --list
fatal: unable to read config file 'C:/Users/thamyres.zomer/.gitconfig': No such file or directoryPS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git config --global user.name "thamyres Zomer" 
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git config --global-- user. gmail "thamyres.zomer@gmail.com"
error: unknown option `global--'
usage: git config [<options>]

Config file location
    --global              use global config file
    --system              use system config file
    --local               use repository config file
    --worktree            use per-worktree config file
    -f, --file <file>     use given config file
    --blob <blob-id>      read config from given blob object

Action
    --get                 get value: name [value-pattern]
    --get-all             get all values: key [value-pattern]
    --get-regexp          get values for regexp: name-regex [value-pattern]
    --get-urlmatch        get value specific for the URL: section[.var] URL
    --replace-all         replace all matching variables: name value [value-pattern]
    --add                 add a new variable: name value
    --unset               remove a variable: name [value-pattern]
    --unset-all           remove all matches: name [value-pattern]
    --rename-section      rename section: old-name new-name
    --remove-section      remove a section: name
    -l, --list            list all
    --fixed-value         use string equality when comparing values to 'value-pattern'
    -e, --edit            open an editor
    --get-color           find the color configured: slot [default]
    --get-colorbool       find the color setting: slot [stdout-is-tty]

Type
    -t, --type <>         value is given this type
    --bool                value is "true" or "false"
    --int                 value is decimal number
    --bool-or-int         value is --bool or --int
    --bool-or-str         value is --bool or string
    --path                value is a path (file or directory name)

Other
    --includes            respect include directives on lookup
    --show-origin         show origin of config (file, standard input, blob, command line)       
    --show-scope          show scope of config (worktree, local, global, system, command)        
    --default <value>     with --get, use default value when missing entry

PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git config --globa 
user. gmail "thamyres.zomer@gmail.com"   
error: key does not contain variable name: user.
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git config --globa 
user.email "thamyres.zomer@gmail.com"
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
        modified:   ../Aula 18/teste.html            
Untracked files:                                              irectory)
  (use "git add <file>..." to include in what will be committed)
        ./                                       l be committe

no changes added to commit (use "git add" and/or 
"git commit -a")                                              d)
PS C:\Users\thamyres.zomer\Desktop\entra21---Tham"git commit -yres-Zomer\trabalhando -git> git add .
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\tra")yres-Zomer\trabalhando -git> git status                       abalhando -git>
On branch main
Your branch is up to date with 'origin/main'.    

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.md

Changes not staged for commit:
  (use "git restore <file>..." to discard changes in working directory)
        modified:   ../Aula 17/respostaatividadeaula17.txt
t
        modified:   ../Aula 18/teste.html        

PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git commit -m  "commit inicial"
[main 148f79d] commit inicial
 1 file changed, 0 insertions(+), 0 deletions(-) 
 create mode 100644 trabalhando -git/README.md   
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits) 

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
 in working directory)
ula17.txt
t
        modified:   ../Aula 18/teste.html        

"git commit -a")
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git branch -M main  
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git remote add origin  https://github.com/ThamyresZomer/trabalhando-git.git
error: remote origin already exists.
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git push -u origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 316 bytes | 316.00 KiB/s, done.
Total 3 (delta 1), reused 1 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/ThamyresZomer/entra21---Thamyres-Zomer.git
   4456375..148f79d  main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
PS C:\Users\thamyres.zomer\De                                                                                                    
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> git push
Everything up-to-date
PS C:\Users\thamyres.zomer\Desktop\entra21---Thamyres-Zomer\trabalhando -git> 
