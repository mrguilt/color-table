# Color Table

## Origin

I created [a page](https://stash.mrguilt.com/colors.html) where I was "jotting down" the HTML color codes for interesting colors I came across, for instance, the [2022 Pantone Color of the Year](https://www.pantone.com/color-of-the-year-2022-tools-for-designers) or a [Particularlly Funky Shade of Purple](https://www.avclub.com/prince-has-finally-been-granted-his-own-hue-of-purple-1798265033). I created an HTML table, which I updated by hand. This worked, until I came across some larger lists of interesting colors.

In parallel, I've been working on learning JavaScript. It struck me that I could have the script read a Comma Separated Value (CSV) with the color code, name, and (optionally) source URL. This would allow the list to be updated easily. As a side benefit, the table could be reordered or broken up without additional effort.

### Initial Version

The initial version would read the file, and put the HTML output to STDOUT. This would be pasted into an HTML template, and uploaded to the server. This made maintaining the list simple, but still required a decent degree of effort.

### Dynamic Version

The next (and current*ish*) version reads the CSV file when the page is called up, parses it, and generates the table. It's currently set up so that each section (fountain pen ink, crayons, etc.) has its own CSV file. To add an entry, a file can be added to the CSV file. I can add a new color from my phone (with the static version, it was challenging at best). 

### Demo Area

The next step was to add a demonstration area. Clicking on a color square would update the demo area. This would display the color on white and backgrounds, as well as use it as a background for white and black text. This gives a sense of what the color would look like in use.

## Functions and Use

### The Color File

The color file is a series of entries, in the form:

```
HTML color code,Color Name,[URL]
```



Where:

* `HTML color code`: The color code, as six hexadecimal digits. It should *not* have a leading hash ("`#`"). 
* `Color Name`: The name of the color, as it is to be displayed in the table. 
* `URL`: The URL of a link to details about the color--documentation saying that's the code in use, an article that inspired its inclusion, etc. This is optional.

A couple example lines:

```
1a7a3f,Colorverse Office Series Green Ink,https://www.jetpens.com/Colorverse-Green-Ink-Office-Series-30-ml-Bottle/pd/29357
24564a,Robert Oster River of Fire,https://inkswatch.com/ink.html?inkId=446
```

### loadFile(filePath) Function

The color file is read with the `loadFile` function. The format:

```
loadFile("COLORFILE.txt");
```

Where `COLORFILE.txt` is the relevant color data file. The output is a string with the contexts of the color file. The code below reads the file into the variable `ColorData`:

```
var ColorData = loadFile("crayola.txt");
```

### PrintTable(myData) Function

The `PrintTable` function takes a the variable containing the contents of a color file, splits it into individual items, and outputs a table.

```
PrintTable(myData);
```

`myData` is the variable containing the colors in the format described above--basically, the variable where loadFile stores its information. So:

```
PrintTable(ColorData);
```

This will simply output HTML inside a `<script>` block. the output will look like:

<table>
<tr>
<td>Foo</td>
<td>Data</td>
<td>Bar</td>
<td>Data</td>
</tr>
</table>

*The `README.md` is still in progress.*
