json.knitting_areas do
  @areas.each do |area|
    json.set! area.id do
      json.extract! area, :id, :name
      json.knitting_times area.knitting_times, partial: 'api/knitting_times/knitting_time', as: :knitting_time
    end
  end
end
