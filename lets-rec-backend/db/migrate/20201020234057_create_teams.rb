class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :sport
      t.string :location
      t.string :venue
      t.string :timeslot
      t.string :status
      t.integer :members

      t.timestamps
    end
  end
end
