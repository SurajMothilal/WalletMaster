class AddUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users, id: :uuid do |t|
      t.string :password_digest, null: :false
      t.timestamps null: false
    end
  end
end
