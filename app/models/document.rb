class Document < ApplicationRecord
  has_rich_text :content

  belongs_to :parent, class_name: "Document", optional: true

  has_many :children, class_name: "Document", foreign_key: "parent_id", dependent: :destroy

  scope :roots, -> { where(parent_id: nil) }

  before_save :infere_title_from_tentent

  def leaf? = children.empty?

  def infere_title_from_tentent
    self.title = content.body.fragment.find_all("h1").first&.text if content.present?
    self.title ||= "Untitled"
  end

  def self.search(term)
    return all if term.blank?

    all.joins(:rich_text_content).where("action_text_rich_texts.body ILIKE ?", "%#{term}%")
  end
end
