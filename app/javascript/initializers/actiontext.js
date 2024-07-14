import "trix"
import "@rails/actiontext"

// Trix.Editor.prototype.save = function() {
//   this.element.closest("form")?.submit()
//   return this.document
// }
//
// document.addEventListener("trix-initialize", function(event) {
//   // Create a custom button
//   var buttonHTML = '<button type="button" class="trix-button trix-button--icon trix-button--icon-save" data-trix-action="x-save">Save</button>';
//   // Insert the custom button into the toolbar
//   var buttonGroup = document.createElement("span");
//   buttonGroup.classList.add("trix-button-group", "trix-button-group--custom");
//   buttonGroup.innerHTML = buttonHTML;
//   var toolbar = event.target.toolbarElement;
//   toolbar.querySelector(".trix-button-group--block-tools").after(buttonGroup);
// });

document.addEventListener("trix-action-invoke", function(event) {
  if (event.actionName == "x-save") {
    event.target.closest("form")?.submit()
  }
});

Trix.config.toolbar.getDefaultHTML = function() {
  return `
    <div class="trix-button-row">
      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="Bold" tabindex="-1">Bold</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="Italic" tabindex="-1">Italic</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="Strikethrough" tabindex="-1">Strikethrough</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="Link" tabindex="-1">Link</button>
      </span>

      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="Heading" tabindex="-1">Heading</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="Quote" tabindex="-1">Quote</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="Code" tabindex="-1">Code</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="Bullets" tabindex="-1">Bullets</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="Numbers" tabindex="-1">Numbers</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="Decrease Level" tabindex="-1">Decrease Level</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="Increase Level" tabindex="-1">Increase Level</button>
        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="Attach Files" tabindex="-1">Attach Files</button>
      </span>

      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="persistance-tools">
        <button type="button" class="trix-button trix-button--icon trix-button--icon-save" data-trix-action="x-save" data-trix-key="s" title="Save" tabindex="-1">Save</button>
      </span>
    </div>

    <div class="trix-dialogs" data-trix-dialogs="">
      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">
        <div class="trix-dialog__link-fields">
          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="Enter a URL…" aria-label="URL" required="" data-trix-input="" disabled="disabled">
          <div class="trix-button-group">
            <input type="button" class="trix-button trix-button--dialog" value="Link" data-trix-method="setAttribute">
            <input type="button" class="trix-button trix-button--dialog" value="Unlink" data-trix-method="removeAttribute">
          </div>
        </div>
      </div>
    </div>
  `
}
