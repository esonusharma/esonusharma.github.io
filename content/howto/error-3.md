Title: Solved Nomenclature Not Generated in PDF Created by Visual Studio Code LaTeX Workshop Extension
Date: 2023-07-14
Modified: 2023-07-14
Category: howto
Tags: latex
Author: esonusharma.github.io
Summary: Execute commands below to solve this problem.
Status: published

The problem regarding not generation of nomenclature in pdf documents created by Visual Studio Code is finally solved.

You may have gone through search engines following the advice to display nomenclature but nothing worked like:

- [Solution 1](https://github.com/James-Yu/LaTeX-Workshop/issues/384)
- [Solution 2](https://latex.org/forum/viewtopic.php?t=34350)
- [Solution 3](https://latex.org/forum/viewtopic.php?t=27292)
- [Solution 4](https://tex.stackexchange.com/questions/62061/problem-with-the-nomenclature)
- [Solution 5](https://stackoverflow.com/questions/58895384/how-to-modify-makeindex-script-in-vs-code-for-latex)
- [Solution 6](https://tex.stackexchange.com/questions/577405/printnomenclature-doesnt-work)

Popular searches regarding the same:

```
- Problem with the nomenclature
- nomencl latex won't show output
```

### Solution

- Step 1. In Visual Studio Code, Open File -> Preferences -> Settings and search for "latex-workshop.latex.tools" in that.
- Step 2. Add the following code inside the "latex-workshop.latex.tools"

```
{
   "name": "makeindex",
   "command": "makeindex",
   "args": [
    "%DOCFILE%.nlo",
    "-s",
    "nomencl.ist",
    "-o",
    "%DOCFILE%.nls"
   ],
   "env": {}
},
```

- Step 3. Again Open File -> Preferences -> Settings and search for "latex-workshop.latex.recipes" in that. Modify the following command:

```
{
   "name": "pdflatex -> bibtex -> pdflatex * 2",
   "tools": [
    "pdflatex",
    "bibtex",
    "pdflatex",
    "pdflatex"
   ]
},
```

like the below command:

```
{
   "name": "pdflatex -> bibtex -> makeindex -> pdflatex * 2",
   "tools": [
    "pdflatex",
    "bibtex",
    "makeindex",
    "pdflatex",
    "pdflatex"
   ]
},
```

- Step 4. Save the file.
- Step 5. Open the "LaTeX Workshop" Extension Menu in Visual Studio Code and run the command with "pdflatex -> bibtex -> makeindex -> pdflatex * 2" name.