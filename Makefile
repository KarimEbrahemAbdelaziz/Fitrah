BAZELISK := $(shell command -v bazelisk 2>/dev/null)
HOMEBREW := $(shell command -v brew 2>/dev/null)

# default: setup

setup_for_development: \
	check_for_bazelisk

open_xcode_project:
	bazel run //:xcodeproj
	
build_main_app: 
	bazel build //App:Fitrah
	
build_azkar_module: 
	bazel build //Modules/Azkar:AzkarListLibrary	

# Check if Ruby is installed, otherwise exists with message
check_for_bazelisk:
	$(info Checking for Bazelisk ⚙️)
ifeq ($(BAZELISK),)
	$(error Bazelisk is not installed, please install the required dependencies ❌)
else
	$(info Bazelisk is installed ✅)	
endif