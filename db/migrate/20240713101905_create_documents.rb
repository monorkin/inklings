class CreateDocuments < ActiveRecord::Migration[7.1]
  def change
    create_table :documents do |t|
      t.string :title
      t.references :parent, foreign_key: { to_table: :documents }

      t.timestamps
    end
  end
end
