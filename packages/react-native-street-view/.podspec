require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |spec|
  spec.name         = "RNStreetView"
  spec.version      = package["version"]
  spec.summary      = package["description"]
  spec.description  = <<-DESC
                  RNStreetView
                   DESC
  spec.homepage     = "https://github.com/rainy5-group/rainy5-group"
  spec.license      = package["license"]
  spec.author       = { "Darius Rainys" => "darapsas@gmail.com" }
  spec.platform     = :ios, "11.0"

  spec.source       = { :git => "https://github.com/rainy5-group/rainy5-group", :tag => "#{spec.version}" }
  spec.source_files = [
    "ios/**/*.{h,m}"
  ]

  spec.dependency 'React-Core'
  spec.dependency 'GoogleMaps', '5.1.0'
end
