module DocumentsHelper
  def link_to_previous_document(document, **options)
    label = options.delete(:label)

    if label.nil?
      label = "< #{document.parent ? document.parent.title : "Back to documents"}"
    end

    link_to document.parent || documents_path, **options do
      content_tag :span, label, class: "truncate"
    end
  end
end
