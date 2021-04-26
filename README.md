# CreditWise Text Formatter Sketch Plugin

## Why this plugin?
CreditWise team utilizes Sketch Library to distribute components and assets. Unfortunately, text-styles can’t be synced via Sketch Library and we had to find a workaround, using external plugins such as Shared Text Styles or Automate. We designed this plugin to improve our workflow to:

- **Global plugin:** With other external plugins, designers need to import text-styles into every single sketch file.
- **Lightweight:** It doesn’t increase the file size.
- **Visible reference:** It has a menu with all the available text sizes, font-weights and line-heights automatically formatted to it. Designers can quickly pick a style and apply to selected text layers.
- **Rename text layers to apply styles:** Has a naming convention to quickly apply styles to text layers.
- **No messy text-styles:** When text-styles are imported, it gets duplicated and gets unmanageable. With this, text styles can be managed through layer naming.
- **Typography system changes:** any future changes to the design system can be pushed via plugin update.

## How to use:

### Choose and apply from text styles:

1. Select text layers
2. Run the plugin command **CreditWise Text Formatter > Select and Apply Text Styles** (or use shortcut: **Option + Shift + Command + t**) to bring up a selection panel.
3. Choose desired styles from the dropdowns and click **Update Selections**

![N|Solid](https://mysites.capitalone.com/:i:/r/personal/oht173_login_capone_com/Documents/cw-type-plugin/demo/choose%20and%20apply.gif?csf=1&e=CyJejq)

### Apply text styles by name:

1. Select text layers
2. Run the plugin command **CreditWise Text Formatter > Apply Text Styles by Name** (or use shortcut: **Command + Shift + w**) to bring up a input panel.
3. Enter one of the styling name from below and click **OK**

![N|Solid](https://mysites.capitalone.com/:i:/r/personal/oht173_login_capone_com/Documents/cw-type-plugin/demo/rename%20to%20apply.gif?csf=1&e=TVtHTM)

### Update all named layers:
1. Change styling names directly in the text layer
2. Run the plugin command **CreditWise Text Formatter > Update All Named Layers** (or use shortcut: **Option + Shift + Command + a**) update styles.

![N|Solid](https://mysites.capitalone.com/:i:/r/personal/oht173_login_capone_com/Documents/cw-type-plugin/demo/update-all-renamed-layers.gif?csf=1&e=ZL2cRj)

## Text Styles Naming Conventions

Rename a text layer or layers with following format: [{Font Family} {Size Name} {Optional Font-Weight}]  
<sup>***Renaming layers directly automatically updates the styles.**</sup>

Here are all the available styles from the design system with its naming convention – see column “**Styling Names**” below.  
<sup>***If you want use Optimist, change the “p” to “o”.**</sup>  



| **Styling Names** | Size | Line-Height | Font-Weight |
|:-|:-|:-|:-|
p tiny | 12px | 18px | Regular
p tiny sb | 12px | 18px | SemiBold
p small | 14px | 21px | Regular
p small sb | 14px | 21px | SemiBold
p normal lt | 16px | 24px | Light
p normal | 16px | 24px | Regular
p normal sb | 16px | 24px | SemiBold
p medium-cw lt | 18px | 27px | Light
p medium-cw | 18px | 27px | Regular
p medium-cw sb | 18px | 27px | SemiBold
p medium lt | 20px | 30px | Light
p medium | 20px | 30px | Regular
p medium sb | 20px | 30px | SemiBold
p large-cw lt | 24px | 36px | Light
p large-cw | 24px | 36px | Regular
p large-cw sb | 24px | 36px | SemiBold
p large | 32px | 40px | Light
p x-large | 48px | 64px | Thin
p xx-large | 64px | 76px | Thin

Naming abbreviations: Proxima Nova = p; Optimist = o; Light = lt; SemiBold = sb
