class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string "title", limit: 255
      t.integer "user_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false   
   
      t.timestamps
    end
  end
end
